import React from 'react'
import Nav from 'react-bootstrap/Nav'
import GetChargeInfo from "./GetChargeInfo"

const App = () => {
  return (
    <>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="row">
        <div className='col'>
          <h1>Find Your Charge Point</h1>
        </div>

      </div>
      <div className='row'>
        <div className='col'><GetChargeInfo /></div>
      </div>

    </>
  )
}

export default App
