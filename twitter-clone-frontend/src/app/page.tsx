import styles from './page.module.css'
import Button from '@/components/UI/Button/Button'
import CloseButton from '@/components/UI/CloseButton/CloseButton'
import InputTest from '@/components/test/InputTest'

export default function Home() {
  return (
    <main className={styles.main}>
      <Button>Button</Button>
      <Button variation='secondary'>Button</Button>
      <Button variation='tertiary'>Button</Button>
      <Button variation='black'>Button</Button>
      <Button disabled variation='tertiary'>Button</Button>
      <Button disabled variation='black'>Button</Button>
      <CloseButton/>
      <InputTest/>
      <CloseButton disabled/>
    </main>
  )
}
