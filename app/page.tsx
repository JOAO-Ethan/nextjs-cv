import Image from 'next/image'
import styles from '@/app/page.module.css'
import Card from '@/app/ui/card'
import print from '@/app/ui/print.module.css'

export default function Home() {
  const mail: string = "3than.joao@gmail.com";
  const age: number = Math.floor((new Date().getTime() - new Date(2003, 7, 3).getTime()) / (1000 * 60 * 60 * 24 * 365.25));
  const mobilite: string[] = ["Béthune", "Lens", "Lille"]
  const linkedin = "https://www.linkedin.com/in/ethan-joao/"
  return (
    <main className={styles.main}>
      <div>
        <Image
          src={'/profil.png'}
          alt={'Ma photographie.'}
          width={256}
          height={190}
          className={styles.profil} />
        <div className={styles.presentation}>
          <p>Je suis Ethan Joao, actuellement étudiant en 3ème année de BUT Informatique à l&apos;Institut Universitaire Technologique de Lens et donc futur développeur !</p>
          <p>
            J’apprécie énormément développer et apprendre durant mon temps libre, je suis actuellement en train de m&apos;initier au japonais et au portugais grâce à Duolinguo et de développer une base de données pour organiser une collection minéralogique.
            Je suis féru de lecture et lis des genres variés, allant de la science-fiction jusqu&apos;à la philosophie en passant par les mangas !
          </p>
          <Card title={'Contact'} content={<>
            <div className={styles.infos}>
              <span>Mail : <a href={`mailto://${mail}`} title="M'envoyer un mail">{mail}</a></span>
              <span>Age : {age} ans</span>
              <span>Permis + voiture</span>
              <span>Mobilités: {mobilite.join(', ')}</span>
              <span><a href={linkedin} title='Lien vers ma page LinkedIn'>LinkedIn</a>
                <span className={print.printLink}> : {linkedin}</span>
              </span>
            </div>
          </>} key={0} />
        </div>
      </div>
    </main>
  )
}
