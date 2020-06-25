import Typography from "typography"
import Lawton from "typography-theme-lawton"

const typography = new Typography(Lawton)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export const { scale, rhythm, options } = typography
export default typography