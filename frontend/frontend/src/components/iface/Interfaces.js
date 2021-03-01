import React, { Component } from 'react'
import { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Forms from './Forms'
import Maps from '../maps/Maps'

function ControlledTabs() {
  const [key, setKey] = useState('map');
  return (
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
      <Tab eventKey="map" title="Map">
        <Maps />
      </Tab>
    </Tabs>
  );
}

export default function Interfaces() {
    return (
      <div>
        <ControlledTabs />
      </div>
    )
}