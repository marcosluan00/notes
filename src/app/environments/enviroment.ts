import { environment as baseEnviroment } from "./environment.prod"

export const environment = {
  ...baseEnviroment,
  production: false
}
