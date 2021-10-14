import React, { useEffect, useState } from 'react'
import '../Main.scss'
import { Link } from 'react-router-dom';
import Label from '../label/Label';
import { MainLayout } from '../../components/layout/MainLayout';
import { initializeMailData } from '../../redux/mail-reducer';
import { useDispatch, useSelector } from 'react-redux';
import {AppStateType} from '../../redux/redux'


export const Mail = (props: any) => {
    const dispatch = useDispatch()
    
    
    useEffect(()=>{
        
            dispatch(initializeMailData());
        
    })
    return (<div className='mail'>
        <MainLayout {...props}>
            
        </MainLayout>
    </div>)
}
