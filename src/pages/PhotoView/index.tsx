import { useLocation } from 'react-router-dom'
import { Photo } from '../../models/Photo'
import {
  BackButton,
  BackLink,
  BackLinkPanel,
  Container,
  Image,
  InfoPanel,
  PhotoCreationDate,
  PhotoDescription,
  PhotoPanel,
} from './styles'

import { useTranslation } from 'react-i18next'

type Location = {
  state: {
    photo: Photo
  }
}

const PhotoView = () => {
  const { t } = useTranslation()

  const location: Location = useLocation()
  const { photo } = location.state

  return (
    <Container>
      <PhotoPanel>
        <Image src={photo.regularUrl} alt={photo.description} />

        <InfoPanel>
          {photo.description && (
            <PhotoDescription>{photo.description}</PhotoDescription>
          )}

          <PhotoCreationDate>
            {t('details.createdDate', { date: photo.creationDate })}
          </PhotoCreationDate>
        </InfoPanel>
      </PhotoPanel>

      <BackLinkPanel>
        <BackLink to='/'>
          <BackButton>{t('details.backButton')}</BackButton>
        </BackLink>
      </BackLinkPanel>
    </Container>
  )
}

export default PhotoView
