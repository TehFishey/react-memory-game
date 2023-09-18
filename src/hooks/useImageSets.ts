import AdultSet from '../config/ImageSets/AdultSet'
import ChildSet from '../config/ImageSets/ChildSet'
import CapsuleSet from '../config/ImageSets/CapsuleSet'

const PrefixDict = {
  ADULT: AdultSet,
  CHILD: ChildSet,
  CAPSULE: CapsuleSet,
}

export type ImageSetPrefix = keyof typeof PrefixDict

export default (...imageSets: ImageSetPrefix[]): string[] => {
  let imageLibrary: string[] = []
  imageSets.forEach((item) => {
    imageLibrary = imageLibrary.concat(PrefixDict[item])
  })
  return imageLibrary
}
