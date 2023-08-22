import { LanguageOptions } from "../../constants/language"
import { Button, ImageCardFlag, Label, LanguagePanel } from "./styles"
import { useTranslation } from 'react-i18next'

const LanguageSelector = () => {
    const { i18n } = useTranslation()

    const renderLanguageOptions = () => {
        const options = LanguageOptions

        return options.map((op) => {

            return (
                <Button onClick={() => i18n.changeLanguage(op.language)}>
                    <ImageCardFlag src={op.img} alt={op.altImage} />
                </Button>
            )
        })
    }

    return (
        <LanguagePanel>
            {/* <Label>Traduzir para </Label> */}
            {renderLanguageOptions()}
        </LanguagePanel>
    )
}

export default LanguageSelector