import NavBar from './index.vue'

describe('@components/nav-bar', () => {
  it(`allow logout after login`, () => {
    const { vm } = shallowMount(
      NavBar,
      createComponentMocks({
        store: {
          auth: {
            state: {
              currentUser: {
                name: 'My Name',
              },
            },
            getters: {
              loggedIn: () => true,
            },
          },
        },
      })
    )

    const logoutRoute = vm.loggedInNavRoutes.find(
      (route) => route.name === 'logout'
    )
    expect(logoutRoute.title).toEqual('Log out')
  })
})
