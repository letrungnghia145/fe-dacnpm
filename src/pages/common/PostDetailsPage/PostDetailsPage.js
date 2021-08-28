import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UIActions } from '../../../actions';
import { PageLoading } from './../../../common';
import Comments from './Comments';
import RelatePosts from './RelatePosts';


export const PostDetailsPage = (props) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(UIActions.fetchDataPostPage(6))    
    }, [])
    const loading = useSelector(state=>state.page.isLoading);
    return (
        <div>
            <PageLoading isLoading={loading}/>
            PostDetailsPage<br/>
            <a href="/" onMouseOver={()=>{console.log("hover")}} >Post voters</a><br/>
            <a href="/" onMouseOver={()=>{console.log("hover")}} >Comment voters</a><br/>
            <Comments comments={{}}/>
            <RelatePosts relatePosts={{}}/>
        </div>
    )
}