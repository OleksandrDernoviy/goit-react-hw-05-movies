import css from './notFoundImg.module.css'


const NotFoundImg = (imgError) => {
  return (
    <div>
      <img
        className={css.errorImg}
        src={`https://images.pexels.com/photos/1209462/pexels-photo-1209462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
        alt="imgError"
      />
    </div>
  );
}

export default NotFoundImg

