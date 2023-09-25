import AdultSet from './ImageSets/AdultSet'
import ChildSet from './ImageSets/ChildSet'
import CapsuleSet from './ImageSets/CapsuleSet'
import SheepSet from './ImageSets/SheepSet'

const PrefixDict = {
  ADULT: AdultSet,
  CHILD: ChildSet,
  CAPSULE: CapsuleSet,
  SHEEP: SheepSet,
}

export default PrefixDict

export type ImageSetPrefix = keyof typeof PrefixDict
