import classnames from 'classnames'
import { cloneElement } from '../../_util/vnode'
import { canGoNext } from './utils/innerSliderUtils'

export const PrevArrow = {
  functional: true,
  clickHandler (options, handle, e) {
    if (e) {
      e.preventDefault()
    }
    handle(options, e)
  },
  render (createElement, context) {
    const { props } = context
    const { clickHandler, infinite, currentSlide, slideCount, slidesToShow } = props
    const prevClasses = { 'slick-arrow': true, 'slick-prev': true }
    let prevHandler = this.clickHandler.bind(this, { message: 'previous' }, clickHandler)

    if (
      !infinite && (currentSlide === 0 || slideCount <= slidesToShow)
    ) {
      prevClasses['slick-disabled'] = true
      prevHandler = null
    }

    const prevArrowProps = {
      key: '0',
      domProps: {
        'data-role': 'none',
      },
      class: classnames(prevClasses),
      style: { display: 'block' },
      on: {
        click: prevHandler,
      },
    }
    const customProps = {
      currentSlide: currentSlide,
      slideCount: slideCount,
    }
    let prevArrow

    if (prevArrow) {
      prevArrow = cloneElement(prevArrow, {
        ...prevArrowProps,
        ...{
          props: customProps,
        },
      })
    } else {
      prevArrow = (
        <button key='0' type='button' {...prevArrowProps}>
          {' '}
          Previous
        </button>
      )
    }

    return prevArrow
  },
}

export const NextArrow = {
  functional: true,
  clickHandler (options, handle, e) {
    if (e) {
      e.preventDefault()
    }
    handle(options, e)
  },
  render (createElement, context) {
    const { props } = context
    const { clickHandler, currentSlide, slideCount } = props

    const nextClasses = { 'slick-arrow': true, 'slick-next': true }
    let nextHandler = this.clickHandler.bind(this, { message: 'next' }, clickHandler)

    if (!canGoNext(props)) {
      nextClasses['slick-disabled'] = true
      nextHandler = null
    }

    const nextArrowProps = {
      key: '1',
      domProps: {
        'data-role': 'none',
      },
      class: classnames(nextClasses),
      style: { display: 'block' },
      on: {
        click: nextHandler,
      },
    }
    const customProps = {
      currentSlide: currentSlide,
      slideCount: slideCount,
    }
    let nextArrow

    if (nextArrow) {
      nextArrow = cloneElement(nextArrow, {
        ...nextArrowProps,
        ...{
          props: customProps,
        },
      })
    } else {
      nextArrow = (
        <button key='1' type='button' {...nextArrowProps}>
          {' '}
          Next
        </button>
      )
    }

    return nextArrow
  },
}