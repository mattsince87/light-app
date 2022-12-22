import { Button } from '@/ui/atoms/button/Button'
import Airbnb from '../../../public/svg/Airbnb.svg'

import styles from './Stack.module.scss'

interface Props {
  primary?: boolean
}

export const Stack = ({ primary = true }: Props) => {
  return (
    <div className={styles.stackWrapper}>
      <div className={`${styles.stackedCardBottom} bg-oceania-100`} />
      <div className={`${styles.stackedCardMiddle} bg-oceania-300`} />
      <div className={`${styles.stackedCard} p-3 bg-white`}>
        <div
          className={`${styles.icon} w-16 h-16 text-white rounded bg-airbnb`}>
          <Airbnb />
        </div>
        <div className={`${styles.total} leading-5`}>
          <span className="font-bold text-oceania-800">$9950.50</span>
          <span className="text-oceania-400">Total</span>
        </div>
        <div className={`${styles.actions}`}>
          <Button icon="Forward" label="Forward" primary />
          <Button icon="Like" label="" primary color="green" />
        </div>
      </div>
    </div>
  )
}
