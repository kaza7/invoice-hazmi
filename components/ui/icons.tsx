// icons.js أو icons.tsx

export const Icons = {
  google: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
    >
      <path
        fill="#4285F4"
        d="M24 9.5c3.5 0 6.4 1.3 8.5 3.6l6.3-6.3C34.6 3.3 29.8 1 24 1 14.5 1 6.6 7.6 3.7 16.5l7.4 5.7c1.6-5.7 6.8-9.7 12.9-9.7z"
      />
      <path
        fill="#34A853"
        d="M46.4 24.2c0-.8-.1-1.5-.2-2.2H24v8.9h12.7c-.7 3.6-2.8 6.6-5.7 8.6l7.4 5.7c4.3-4 6.8-9.7 6.8-16z"
      />
      <path
        fill="#FBBC05"
        d="M10.4 29.5c-1-1.6-1.5-3.4-1.5-5.5s.6-3.8 1.5-5.5L3 12.8C1.1 16.1 0 20 0 24s1.1 7.9 3 11.2l7.4-5.7z"
      />
      <path
        fill="#EA4335"
        d="M24 46c5.6 0 10.3-1.9 13.7-5.2l-7.4-5.7c-1.9 1.2-4.2 1.9-6.4 1.9-6.1 0-11.3-4-12.9-9.7l-7.4 5.7c3 8.9 10.8 15.5 20.4 15.5z"
      />
    </svg>
  ),
  spinner: (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="animate-spin"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
      />
    </svg>
  ),
};
