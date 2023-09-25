import { default as PrefixDict, ImageSetPrefix } from '../config/ImageSets'

export default (imageSets: ImageSetPrefix[]): string[] => {
  let imageLibrary: string[] = []
  imageSets.forEach((item) => {
    imageLibrary = imageLibrary.concat(PrefixDict[item])
  })
  return imageLibrary
}
