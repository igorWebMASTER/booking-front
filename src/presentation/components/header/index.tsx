import React, { useState } from 'react'
import { faBed, faCalendarDays, faCar, faPerson, faPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from './styles'
import { Button } from '../navbar/styles'
import { RangeKeyDict } from 'react-date-range';
import { format } from 'date-fns'
import DateRange from './components/DateRange'
import { Featured } from '../featured'

export function Header() {
  const [openDate, setOpenDate] = useState(false)
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState<{ [key: string]: any }>({
    adult: 0,
    children: 0,
    room: 0,
  })

  const [date, useDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    }
  ]);

  function handleSelect(date: RangeKeyDict) {
    console.log(date); // native Date object
  }

  const handleOption = (name: string, operation: string) => {
    setOptions((prev: any) => {
      return {
        ...prev,
        [name]: operation === 'add' ? options[name] + 1 : options[name] - 1
      }
    })
  }

  const [daySelected] = date;

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.HeaderList>
          <S.HeaderListItem active>
            <FontAwesomeIcon icon={faBed} />
            <span>Hospedagens</span>
          </S.HeaderListItem>
          <S.HeaderListItem>
            <FontAwesomeIcon icon={faPlane} />
            <span>Voos</span>
          </S.HeaderListItem>
          <S.HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <span>Aluguel de carros</span>
          </S.HeaderListItem>
          <S.HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <span>Atrações</span>
          </S.HeaderListItem>
          <S.HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <span>Táxis (aeroporto)</span>
          </S.HeaderListItem>
        </S.HeaderList>
        <S.HeaderContent>
          <S.HeaderTitle>
            Descontos vitalícios? Apenas com o Genius!
          </S.HeaderTitle>
          <S.HeaderSubtitle>
            Receba recompensas pelas suas viagens – tenha descontos imediatos de 10% ou mais com uma conta Booking.com gratuita
          </S.HeaderSubtitle>
          <S.HeaderButton>
            <span>Iniciar sessão/Registrar</span>
          </S.HeaderButton>
        </S.HeaderContent>
        <S.HeaderSearch>
          <S.HeaderSearchItem >
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <S.Input type="text" name="" placeholder="Para onde você vai?" />
          </S.HeaderSearchItem>
          <S.HeaderSearchItem onClick={() => setOpenDate(!openDate)}>
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <S.Span>{`${format(daySelected?.startDate, 'MM/dd/yyyy')} para ${format(daySelected.startDate, 'MM/dd/yyyy}')}`}</S.Span>
            {openDate && <DateRange onChange={handleSelect} />}
          </S.HeaderSearchItem>
          <S.HeaderSearchItem >
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <S.Span onClick={() => setOpenOptions(!openOptions)}>{options?.adult} adults {options?.children} children {options?.room} room</S.Span>
            {openOptions && (<S.Option>
              <S.OptionItem>
                <S.SpanOptionItem>Adult</S.SpanOptionItem>
                <S.OptionCounter>
                  <S.OptionCounterButton
                    onClick={() => handleOption("adult", "decrement")}
                    disabled={options?.adult <= 0}
                  >-</S.OptionCounterButton>
                  <S.OptionCounterNumber>{options?.adult}</S.OptionCounterNumber>
                  <S.OptionCounterButton onClick={() => handleOption("adult", "add")}>+</S.OptionCounterButton>
                </S.OptionCounter>
              </S.OptionItem>
              <S.OptionItem>
                <S.SpanOptionItem>Crianças</S.SpanOptionItem>
                <S.OptionCounter>
                  <S.OptionCounterButton
                    disabled={options?.children <= 0}
                    onClick={() => handleOption("children", "decrement")}
                  >-</S.OptionCounterButton>
                  <S.OptionCounterNumber>{options?.children}</S.OptionCounterNumber>
                  <S.OptionCounterButton
                    onClick={() => handleOption("children", "add")}>+</S.OptionCounterButton>
                </S.OptionCounter>
              </S.OptionItem>
              <S.OptionItem>
                <S.SpanOptionItem>Room</S.SpanOptionItem>
                <S.OptionCounter>
                  <S.OptionCounterButton
                    disabled={options?.room <= 0}
                    onClick={() => handleOption("room", "decrement")}>-</S.OptionCounterButton>
                  <S.OptionCounterNumber>{options?.room}</S.OptionCounterNumber>
                  <S.OptionCounterButton
                    onClick={() => handleOption("room", "add")} >+</S.OptionCounterButton>
                </S.OptionCounter>
              </S.OptionItem>
            </S.Option>)}
          </S.HeaderSearchItem>
          <S.HeaderSearchItem>
            <Button>
              PESQUISAR
            </Button>
          </S.HeaderSearchItem>
        </S.HeaderSearch>
      </S.HeaderContainer>
    </S.Header>
  )
}
