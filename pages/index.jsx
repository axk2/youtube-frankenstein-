import { memo } from "react"
import Layout from '../layouts/Layout'
import RecommendedVideos from '../screens/home/RecommendedVideos'


export default memo(() => (
    <Layout>
        <RecommendedVideos />
    </Layout>
))
