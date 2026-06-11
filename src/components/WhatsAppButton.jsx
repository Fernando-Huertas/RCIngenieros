import React from 'react'
import { Icon } from '@iconify/react'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
    return (
        <a 
            href="https://wa.me/51995910229?text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20sus%20servicios%20empresariales." 
            className="whatsapp-float" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <Icon icon="ic:baseline-whatsapp" />
        </a>
    )
}
