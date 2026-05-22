import { useTranslation } from 'react-i18next'

export default function Cancellation() {
  const { t } = useTranslation()
  const s2li = t('pages.cancellation.s2li', { returnObjects: true }) as string[]

  return (
    <div className="pt-24 lg:pt-32">
      <section className="relative py-16 lg:py-24 px-6 lg:px-12 bg-wp-forest">
        <div className="max-w-4xl mx-auto text-center">
          <p className="micro-label text-wp-yellow mb-4 tracking-[0.15em]">
            {t('pages.cancellation.heroBadge')}
          </p>
          <h1 className="headline-lg text-white">
            {t('pages.cancellation.title')}
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-24 px-6 lg:px-12 bg-wp-cream">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 lg:p-12 shadow-card space-y-8">
            <p className="body-text text-graytext">
              {t('pages.cancellation.intro')}
            </p>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                {t('pages.cancellation.s1h')}
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-wp-yellow/5 border-l-4 border-wp-yellow">
                  <h3 className="font-display font-semibold text-wp-forest mb-2">
                    {t('pages.cancellation.t30h')}
                  </h3>
                  <p className="body-text text-graytext">
                    {t('pages.cancellation.t30p')}
                  </p>
                </div>

                <div className="p-6 bg-wp-yellow/5 border-l-4 border-wp-yellow">
                  <h3 className="font-display font-semibold text-wp-forest mb-2">
                    {t('pages.cancellation.t1530h')}
                  </h3>
                  <p className="body-text text-graytext">
                    {t('pages.cancellation.t1530p')}
                  </p>
                </div>

                <div className="p-6 bg-wp-yellow/5 border-l-4 border-wp-yellow">
                  <h3 className="font-display font-semibold text-wp-forest mb-2">
                    {t('pages.cancellation.t15h')}
                  </h3>
                  <p className="body-text text-graytext">
                    {t('pages.cancellation.t15p')}
                  </p>
                </div>

                <div className="p-6 bg-wp-yellow/5 border-l-4 border-wp-yellow">
                  <h3 className="font-display font-semibold text-wp-forest mb-2">
                    {t('pages.cancellation.t7h')}
                  </h3>
                  <p className="body-text text-graytext">
                    {t('pages.cancellation.t7p')}
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                {t('pages.cancellation.s2h')}
              </h2>
              <p className="body-text text-graytext mb-4">
                {t('pages.cancellation.s2p1')}
              </p>
              <ul className="list-disc list-inside space-y-2 body-text text-graytext ml-4">
                {s2li.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-wp-forest mb-4">
                {t('pages.cancellation.s3h')}
              </h2>
              <p className="body-text text-graytext">
                {t('pages.cancellation.s3p1')}
              </p>
            </section>

            <div className="pt-8 border-t border-wp-forest/10">
              <p className="text-sm text-graytext">
                {t('pages.cancellation.updated')}
              </p>
              <p className="text-sm text-graytext mt-4">
                {t('pages.cancellation.footer')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
