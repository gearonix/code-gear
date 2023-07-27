import { Suspense } from 'react'

import { SignInModal } from '@/widgets/sign-in-modal'

import { Editor } from '$/editor'

const EditPage = () => {
  return (
    <Suspense fallback={null}>
      <Editor SignIn={SignInModal} />
    </Suspense>
  )
}

export default EditPage
