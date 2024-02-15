import React from 'react'
import { setActiveCategory } from '../../../../store/categories/categories.slice';
import { CategoriesName } from '../../../../store/categories/categories.type';
import styles from './CategoryTab.module.scss';

const CategoryTab = ({ text, categoryName }) => {
  return (
    <button
      className={
        categoryName === categoryName 
        ? styles.active_category
        : styles.category_button
      }
    >
        {text}
    </button>
  )
}

export default CategoryTab