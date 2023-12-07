import css from './notFoundImg.module.css'


const NotFoundImg = (imgError) => {
  return (
      <div><img
          className={css.errorImg}
        src={`https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700`}
        alt='imgError'
      /></div>
  )
}

export default NotFoundImg

