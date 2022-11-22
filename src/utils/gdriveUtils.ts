import { it } from "node:test"
import DriveContentType from "../models/enum/driveContentType"
import { ItemDrive } from "../models/data/itemDrive"

export const createQuery = (items: ItemDrive[], type:DriveContentType) => {
  let query = ""
  let formated
  const queryFormat: string = "'id' in parents or "
  const queryEndFormat: string =
    type == DriveContentType.FOLDER
      ? "'id' in parents and mimeType = 'application/vnd.google-apps.folder'"
      : "'id' in parents"


  for (let i = 0; i < items.length; i++) {
    if (i === items.length - 1) {
      formated = queryEndFormat.replace("id", items[i].id)
      query = query.concat(formated)
      continue
    }

    formated = queryFormat.replace("id", items[i].id)
    query = query.concat(formated)
  }

  console.log(query)

  return query
}
