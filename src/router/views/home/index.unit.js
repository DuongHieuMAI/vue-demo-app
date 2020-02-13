import Home from './index.vue'

describe('@views/home', () => {
  it('is a valid view', () => {
    expect(Home).toBeAViewComponent()
  })

  it('renders an element', () => {
    const { element } = shallowMountView(Home)
    expect(element.innerHTML).toContain('map')
  })
})
