import React from 'react'
import { Button } from '../Button/Button'
import './MainSection.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function MainSection() {
    return (
        <div className='main-section'>
            
            <div className='title'>
            <h1>Linguagem de Estruturação / Apresentação de Conteúdos</h1>
            </div>

            <div className="main-btn">
                <AnchorLink href='#atv-1'>
                <Button className="btn"
                buttonSize='btn-large'
                buttonStyle='btn-primary'
                >
                    Ir para atividade
                </Button>
                </AnchorLink>

            </div>

        </div>
    )
}

export default MainSection
