import { Suspense } from 'react'

import { Page } from '@/shared/lib'
import { SignInModal } from '@/widgets/sign-in-modal'

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
