import React from 'react';
import Preview from './preview'

const PreviewList = (props) => {
  return (
    <div>

        { props.orders.map( order => {
          return <Preview order={order} key={order.id} />
        } ) }

    </div>
  )
}

export default PreviewList 