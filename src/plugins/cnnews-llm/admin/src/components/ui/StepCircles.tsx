import { ReactNode } from 'react'
import { TaskStep, StepStatus } from '../../types/task'

// border: 1px solid #000;
// padding: 4px 8px 4px 8px;
// border-radius: 100px;
// text-transform: uppercase;
// font-size: 12px;
// font-weight: 500;
const CircleTmpl = ({ fgColor, bgColor, children }: { fgColor: string, bgColor: string, children: ReactNode }) => {
  return (
    <div style={{
      tabSize: 4,
      lineHeight: 'inherit',
      textIndent: 0,
      borderCollapse: 'collapse',
      boxSizing: 'border-box',
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: fgColor,
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{
        tabSize: 4,
        lineHeight: 'inherit',
        textIndent: 0,
        borderCollapse: 'collapse',
        boxSizing: 'border-box',
        borderStyle: 'solid',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9999 + 'px',
        borderWidth: 2 + 'px',
        borderColor: fgColor,
        backgroundColor: bgColor,
        padding: 2 + 'px',
      }}>
        <span style={{
          tabSize: 4,
          textIndent: 0,
          borderCollapse: 'collapse',
          boxSizing: 'border-box',
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: '#e5e7eb',
          fontSize: 0.875 + 'rem',
          lineHeight: 1.25 + 'rem',
          color: fgColor,
        }}>
          {children}
        </span>
      </div>
    </div>
  )
}

const CircleInit = () => {
  const fg = 'rgb(107 114 128 / 1)';
  const bg = 'rgb(243 244 246 / 1)';

  return (
    <CircleTmpl fgColor={fg} bgColor={bg}>
      <svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          tabSize: 4,
          textIndent: 0,
          borderCollapse: 'collapse',
          fontSize: 0.875 + 'rem',
          lineHeight: 1.25 + 'rem',
          color: fg,
          width: 24,
          height: 24,
          fill: 'none',
          stroke: 'currentcolor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          boxSizing: 'border-box',
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: fg,
          display: 'block',
          verticalAlign: 'middle',
          padding: 0.125 + 'rem',
        }}
      >
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="19" cy="12" r="1"></circle>
        <circle cx="5" cy="12" r="1"></circle>
      </svg>
    </CircleTmpl>
  )
}

const CircleProgress = () => {
  const fg = 'rgb(249 115 22 / 1)';
  const bg = 'rgb(255 237 213 / 1)';

  return (
    <CircleTmpl fgColor={fg} bgColor={bg}>
      <svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className='status-spinner'
        style={{
          tabSize: 4,
          textIndent: 0,
          borderCollapse: 'collapse',
          fontSize: 0.875 + 'rem',
          lineHeight: 1.25 + 'rem',
          color: fg,
          width: 24,
          height: 24,
          fill: 'none',
          stroke: 'currentcolor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          boxSizing: 'border-box',
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: fg,
          display: 'block',
          verticalAlign: 'middle',
          padding: 0.125 + 'rem',
        }}
      >
        <line x1="12" y1="2" x2="12" y2="6"></line>
        <line x1="12" y1="18" x2="12" y2="22"></line>
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
        <line x1="2" y1="12" x2="6" y2="12"></line>
        <line x1="18" y1="12" x2="22" y2="12"></line>
        <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
        <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
      </svg>
      <style>
        {`
        svg.status-spinner {
          -webkit-animation: spin 4s linear infinite;
          -moz-animation: spin 4s linear infinite;
          animation: spin 4s linear infinite;
        }

        @-moz-keyframes spin {
          100% {
            -moz-transform: rotate(360deg);
          }
        }

        @-webkit-keyframes spin {
          100% {
            -webkit-transform: rotate(360deg);
          }
        }

        @keyframes spin {
          100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
      `}
      </style>
    </CircleTmpl>
  )
}

const CircleSuccess = () => {
  const fg = 'rgb(34 197 94 / 1)';
  const bg = 'rgb(220 252 231 / 1)';

  return (
    <CircleTmpl fgColor={fg} bgColor={bg}>
      <svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          tabSize: 4,
          textIndent: 0,
          borderCollapse: 'collapse',
          fontSize: 0.875 + 'rem',
          lineHeight: 1.25 + 'rem',
          color: fg,
          width: 24,
          height: 24,
          fill: 'none',
          stroke: 'currentcolor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          boxSizing: 'border-box',
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: fg,
          display: 'block',
          verticalAlign: 'middle',
          padding: 0.125 + 'rem',
        }}
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </CircleTmpl>
  )
}

const CircleError = () => {
  const fg = 'rgb(239 68 68 / 1)';
  const bg = 'rgb(254 226 226 / 1)';

  return (
    <CircleTmpl fgColor={fg} bgColor={bg}>
      <svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          tabSize: 4,
          textIndent: 0,
          borderCollapse: 'collapse',
          fontSize: 0.875 + 'rem',
          lineHeight: 1.25 + 'rem',
          color: fg,
          width: 24,
          height: 24,
          fill: 'none',
          stroke: 'currentcolor',
          strokeWidth: 2,
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          boxSizing: 'border-box',
          borderWidth: 0,
          borderStyle: 'solid',
          borderColor: fg,
          display: 'block',
          verticalAlign: 'middle',
          padding: 0.125 + 'rem',
        }}
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </CircleTmpl>
  )
}

const StepCircleItem = ({ status }: { status: StepStatus }) => {
  switch (status) {
    case 'init':
      return (
        <CircleInit />
      )
    case 'inProgress':
      return (
        <CircleProgress />
      )
    case 'success':
      return (
        <CircleSuccess />
      )
    case 'error':
      return (
        <CircleError />
      )
    default:
      return (
        <CircleInit />
      )
  }
}

const StepLine = () => {
  return (
    <div style={{
      tabSize: 4,
      fontFamily: 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      lineHeight: 'inherit',
      textIndent: 0,
      borderCollapse: 'collapse',
      boxSizing: 'border-box',
      borderWidth: 0,
      borderStyle: 'solid',
      borderColor: '#e5e7eb',
      height: 0.2 + 'rem',
      // flexGrow: 1,
      width: 32 + 'px',
      backgroundColor: 'rgb(209 213 219 / 1)',
      marginTop: 'auto',
      marginBottom: 'auto',
      marginRight: 'calc(0.5rem)',
      marginLeft: 'calc(0.5rem)',
    }}></div>
  )
}

const StepCircles = ({ steps }: { steps: TaskStep[] }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        lineHeight: 'inherit',
        textIndent: 0,
        borderCollapse: 'collapse',
        boxSizing: 'border-box',
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: '#e5e7eb',
        alignItems: 'center',
      }}
    >
      {steps.map((step, index) => {
        return (
          <div
            key={index}
            style={{
              margin: 0,
              padding: 0,
              display: 'inline-flex',
            }}
          >
            <StepCircleItem status={step.status} />
            {(index < steps.length - 1) && <StepLine />}
          </div>
        )
      })}
    </div >
  )
}

export { StepCircles };
