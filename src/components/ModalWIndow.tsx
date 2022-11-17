import { useState } from "react"
import NewNote from "./NewNote"

export default function ModalWindow(props: any) {
    

    return (
    <div 
        style={{...styles.Modal, display: props.visible? 'flex' : 'none'}}
        onClick={() => props.setVisible(false)}
    >
        <div 
            style={styles.ModalContent}
            onClick={(event) => event.stopPropagation()}
        >
            {props.children}
        </div>
    </div>)
}

const styles={
    Modal: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        background: 'rgba(0,0,0,0.4)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: '0',
        left: '0',
    },
    ModalContent: {
        background: 'white',
        padding: '20px',
    }
}