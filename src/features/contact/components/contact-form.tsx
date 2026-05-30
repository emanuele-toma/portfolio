import { useState } from 'react';

const field = 'mb-4 flex flex-col gap-2';
const fieldLabel = 'font-carved text-[.8rem] uppercase tracking-[.22em] text-crimson';
const fieldInput =
  'border border-gold-dim bg-parchment-lt px-[14px] py-[12px] font-body text-base text-ink-on-parchment outline-none focus:border-crimson focus:bg-[#fff8e8]';

interface ContactFormLabels {
  title: string;
  lede: string;
  name: string;
  email: string;
  msg: string;
  send: string;
  thanks: string;
}

interface ContactFormProps {
  labels: ContactFormLabels;
  accessKey: string;
}

export function ContactForm({ labels, accessKey }: ContactFormProps) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append('access_key', accessKey);

    if (import.meta.env.MODE === 'development') {
      await new Promise(resolve => setTimeout(resolve, 1000));
    } else {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      }).catch(err => {
        console.error('Form submission error:', err);
      });
    }

    setSent(true);
    setLoading(false);
  };

  return (
    <form
      className="form-card"
      onSubmit={handleSubmit}
      action="https://api.web3forms.com/submit"
      method="POST"
    >
      {!sent && (
        <div>
          <h2 className="mb-2 font-blackletter text-[clamp(2rem,3vw,2.6rem)] font-normal tracking-normal text-ink-2">
            {labels.title}
          </h2>
          <p className="mb-6 italic text-ink-on-parchment-soft">{labels.lede}</p>

          <div className="grid grid-cols-2 gap-4 max-[600px]:grid-cols-1">
            <div className={field}>
              <label htmlFor="cn" className={fieldLabel}>
                {labels.name}
              </label>
              <input
                id="cn"
                name="name"
                type="text"
                placeholder={labels.name}
                className={fieldInput}
                required
                autoComplete="name"
              />
            </div>
            <div className={field}>
              <label htmlFor="ce" className={fieldLabel}>
                {labels.email}
              </label>
              <input
                id="ce"
                name="email"
                type="email"
                placeholder={labels.email}
                className={fieldInput}
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className={field}>
            <label htmlFor="cm" className={fieldLabel}>
              {labels.msg}
            </label>
            <textarea
              id="cm"
              name="message"
              required
              placeholder={labels.msg}
              className={`${fieldInput} min-h-40 resize-y`}
            />
          </div>

          <button
            className="btn btn-gold relative"
            type="submit"
            disabled={loading}
            style={{
              pointerEvents: loading ? 'none' : undefined,
            }}
          >
            <span
              className="absolute left-0 top-0 h-full w-full flex items-center justify-center"
              style={{ display: loading ? undefined : 'none' }}
            >
              <svg
                className="animate-spin h-5 w-5 text-crimson"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </span>
            <span style={{ opacity: loading ? 0 : 1 }}>{labels.send}</span>
          </button>
        </div>
      )}

      {sent && (
        <div className="p-8 text-center">
          <p className="m-0 font-blackletter text-[1.4rem] text-ink-2">{labels.thanks}</p>
        </div>
      )}
    </form>
  );
}
