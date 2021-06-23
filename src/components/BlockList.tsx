import React, { ReactElement } from 'react';
import { Iblock } from '../model/BlockChain';
import Block from './Block';
import '../style/BlockList.css';

const BlockList = (props:{blocklist : Iblock[]}) : ReactElement => (
<ul id='bloclist'>
    {props.blocklist.map((block, index) => (
            <li key={index}>Block N°{index + 1} <Block BlockToDisplay={block}/></li>))}
</ul>);
export default BlockList;
