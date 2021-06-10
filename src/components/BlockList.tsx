import React, { ReactElement } from 'react';
import { Grid } from '@material-ui/core';
import { Iblock } from '../model/BlockChain';
import Block from './Block';
import '../style/BlockList.css';

const BlockList = (props:{blocklist : Iblock[]}) : ReactElement => (
<div className="text-center">
    {props.blocklist.map((block, index) => (
            <Grid container justify = "center" className="text-center" key={index}>
                I
                <Block BlockToDisplay={block}/>
            </Grid>))}
</div>);
export default BlockList;
