import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import firebase from 'firebase'
import slugify from 'slugify'
const store = new Vuex.Store({
    state: {
        //userstate: loggedout
        user: null
    },
    getters: {
        // s = state :: for all
        getUser(s) {
            return s.user
        },
        userRole(s) {
            return s.user ? s.user.role : null
        },
        userImage(s) {
            return s.user ? s.user.headshot : null
        }
    },
    mutations: {
        // s = state , p = payload :: for all
        setUser(s, p) {
            s.user = p
        }
    },
    actions: {
        uploadImageAndGetURL(s, p) {
            var base64 = p.base64,
                parent = p.parent,
                type = p.type,
                name = p.name
            return new Promise((resolve, reject) => {
                if (base64) {
                    var uploadTask = firebase.storage().ref(parent + "/" + type + "/" + name).putString(base64, 'data_url')
                    uploadTask.on(
                        "state_changed",
                        ( /*snapshot*/ ) => {},
                        (error) => {
                            // Handle unsuccessful uploads
                            reject(error.message)
                        },
                        () => {
                            // Handle successful uploads on complete
                            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                                resolve(downloadURL);
                            });
                        }
                    );
                } else {
                    reject('No file uploaded')
                }
            })
        },
        getSlug(s, p) {
            return new Promise( (resolve) => {
                var {
                    name
                } = p
                firebase.database().ref('slugs').once('value', async (snaps) => {
                    var slugs = snaps.val()
                    var slug = slugify(name)
                    while (check(slugs, slug) == 1) {
                        slug = slug + '-' + Math.ceil(Math.random() * 99)
                    }
                    await firebase.database().ref('slugs').push(slug)
                    resolve(slug)
                })

                function check(slugs, slug) {
                    var flag = -1
                    for (var i in slugs) {
                        console.log(`comparing ${slugs[i] } == ${slug} `);
                        if (slugs[i] == slug) {
                            flag = 1
                            break;
                        }
                    }
                    return flag
                }

            })
        }
    }
})
export default store