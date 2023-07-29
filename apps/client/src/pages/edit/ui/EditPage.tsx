import { Suspense } from 'react'

import { SignInModal } from '@/widgets/sign-in-modal'

import { Page } from '$/client-shared'
import { Editor } from '$/editor'

const EditPage = () => {
  return (
    <Page>
      <Suspense fallback={null}>
        <Editor SignIn={SignInModal} />
      </Suspense>
    </Page>
  )
}

export default EditPage
