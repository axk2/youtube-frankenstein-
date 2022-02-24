import { memo } from "react"
import { useRouter } from 'next/router'
import Video from '../../../screens/video'
import Layout from '../../../layouts/Layout'


export default memo(() => {
    const router = useRouter()
    const { id } = router.query


    return (
        <Layout>
            <Video id={id} />
        </Layout>
    )
})
