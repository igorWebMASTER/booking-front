import React from 'react'
import * as S from './styles'

export function NavBar() {
    return (
        <S.NavBar>
            <S.NavBarContainer>
                <S.NavBarLogo>
                    IBooking
                </S.NavBarLogo>
                <S.NavBarItem>
                    <S.Button>
                        Registrar
                    </S.Button>
                    <S.Button>
                        Registrar
                    </S.Button>
                </S.NavBarItem>
            </S.NavBarContainer>
        </S.NavBar>
    )
}
