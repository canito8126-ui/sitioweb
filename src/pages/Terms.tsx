import { useTranslation } from 'react-i18next'

export default function Terms() {
  const { t } = useTranslation()
  const s2li = t('pages.terms.s2li', { returnObjects: true }) as string[]
  const s3li = t('pages.terms.s3li', { returnObjects: true }) as string[]
  const s4li = t('pages.terms.s4li', { returnObjects: true }) as string[]

  return (
    <div className="pt-24 lg:pt-32">
      <section className="relative py-16 lg:py-24 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            {t('pages.terms.heroBadge')}
          </p>
          <h1 className="headline-lg text-white">
            {t('pages.terms.title')}
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 lg:p-12 shadow-card space-y-8">
            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                {t('pages.terms.s1h')}
              </h2>
              <p className="body-text text-graytext mb-4">
                {t('pages.terms.s1p1')}
              </p>
              <p className="body-text text-graytext">
                {t('pages.terms.s1p2')}
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                {t('pages.terms.s2h')}
              </h2>
              <p className="body-text text-graytext mb-4">
                {t('pages.terms.s2p1')}
              </p>
              <ul className="list-disc list-inside space-y-2 body-text text-graytext ml-4">
                {s2li.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                {t('pages.terms.s3h')}
              </h2>
              <p className="body-text text-graytext mb-4">
                {t('pages.terms.s3p1')}
              </p>
              <ul className="list-disc list-inside space-y-2 body-text text-graytext ml-4">
                {s3li.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                {t('pages.terms.s4h')}
              </h2>
              <p className="body-text text-graytext mb-4">
                {t('pages.terms.s4p1')}
              </p>
              <ul className="list-disc list-inside space-y-2 body-text text-graytext ml-4">
                {s4li.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                {t('pages.terms.s5h')}
              </h2>
              <p className="body-text text-graytext">
                {t('pages.terms.s5p1')}
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                {t('pages.terms.s6h')}
              </h2>
              <p className="body-text text-graytext">
                {t('pages.terms.s6p1')}
              </p>
            </section>

            <div className="pt-8 border-t border-wp-forest/10">
              <p className="text-sm text-graytext">
                {t('pages.terms.updated')}
              </p>
              <p className="text-sm text-graytext mt-2">
                {t('pages.terms.questions')}{' '}
                <a href="mailto:wildpathcr@gmail.com" className="text-wp-yellow hover:underline">
                  wildpathcr@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
