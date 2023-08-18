export const viewports = [600, 800, 1000, 1200, 1500]

const widthToStr = (w: number) => w.toString() + 'px'

const generateViewPort = (width: number) => {
  return {
    name: widthToStr(width),
    styles: {
      width: widthToStr(width),
      height: '1080px'
    }
  }
}
export const createViewPorts = () => {
  return Object.fromEntries(
    viewports.map((i) => [widthToStr(i), generateViewPort(i)])
  )
}
