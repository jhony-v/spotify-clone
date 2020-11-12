import ButtonPlayerPrimary from '@spf-components/common/ButtonPlayerPrimary'
import { AnimatePresence } from 'framer-motion'
import { S } from './elements'

const ButtonPlayerAnimatable = ({open,...restProps}) => {
    return(
        <AnimatePresence>
        {open && (
          <S.WrapperButtonPlayer>
            <ButtonPlayerPrimary {...restProps} />
          </S.WrapperButtonPlayer>
        )}
      </AnimatePresence>
    )
}

export default ButtonPlayerAnimatable
