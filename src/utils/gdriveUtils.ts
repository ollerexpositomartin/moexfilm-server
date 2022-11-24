import { it } from "node:test"
import DriveContentType from "../models/enum/driveContentType"
import { ItemDrive } from "../models/data/itemDrive"

export const createQuery = (id:string, type:DriveContentType) => {
  let query: string =
    type == DriveContentType.FOLDER
      ? "'id' in parents and mimeType = 'application/vnd.google-apps.folder'"
      : "'id' in parents and mimeType = 'video/x-matroska'"

    query = query.replace('id',id)

  return query
}
