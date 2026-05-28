import React from 'react'
import { Icon } from '@iconify/react'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
    return (
        <a 
            href="https://wa.me/51943252468" 
            className="whatsapp-float" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
        >
            <Icon icon="ic:baseline-whatsapp" />
        </a>
    )
}
