import React from "react";

export default function BackgroundAnimated() {
  return (
    <>
      <div id='bg-wrap' className='fixed inset-0 w-full h-full overflow-hidden'>
        <svg viewBox='0 0 100 100' preserveAspectRatio='xMidYMid slice'>
          <defs>
            {/* Gradients */}
            <radialGradient
              id='Gradient1'
              cx='50%'
              cy='50%'
              fx='0.441602%'
              fy='50%'
              r='.5'
            >
              <animate
                attributeName='fx'
                dur='68s'
                values='0%;3%;0%'
                repeatCount='indefinite'
              />
              <stop offset='0%' stopColor='rgba(255, 0, 255, 1)' />
              <stop offset='100%' stopColor='rgba(255, 0, 255, 0)' />
            </radialGradient>
            <radialGradient
              id='Gradient2'
              cx='50%'
              cy='50%'
              fx='2.68147%'
              fy='50%'
              r='.5'
            >
              <animate
                attributeName='fx'
                dur='47s'
                values='0%;3%;0%'
                repeatCount='indefinite'
              />
              <stop offset='0%' stopColor='rgba(255, 255, 0, 1)' />
              <stop offset='100%' stopColor='rgba(255, 255, 0, 0)' />
            </radialGradient>
            <radialGradient
              id='Gradient3'
              cx='50%'
              cy='50%'
              fx='0.836536%'
              fy='50%'
              r='.5'
            >
              <animate
                attributeName='fx'
                dur='43s'
                values='0%;3%;0%'
                repeatCount='indefinite'
              />
              <stop offset='0%' stopColor='rgba(0, 255, 255, 1)' />
              <stop offset='100%' stopColor='rgba(0, 255, 255, 0)' />
            </radialGradient>
            <radialGradient
              id='Gradient4'
              cx='50%'
              cy='50%'
              fx='4.56417%'
              fy='50%'
              r='.5'
            >
              <animate
                attributeName='fx'
                dur='46s'
                values='0%;5%;0%'
                repeatCount='indefinite'
              />
              <stop offset='0%' stopColor='rgba(0, 255, 0, 1)' />
              <stop offset='100%' stopColor='rgba(0, 255, 0, 0)' />
            </radialGradient>
            <radialGradient
              id='Gradient5'
              cx='50%'
              cy='50%'
              fx='2.65405%'
              fy='50%'
              r='.5'
            >
              <animate
                attributeName='fx'
                dur='49s'
                values='0%;5%;0%'
                repeatCount='indefinite'
              />
              <stop offset='0%' stopColor='rgba(0,0,255, 1)' />
              <stop offset='100%' stopColor='rgba(0,0,255, 0)' />
            </radialGradient>
            <radialGradient
              id='Gradient6'
              cx='50%'
              cy='50%'
              fx='0.981338%'
              fy='50%'
              r='.5'
            >
              <animate
                attributeName='fx'
                dur='51s'
                values='0%;5%;0%'
                repeatCount='indefinite'
              />
              <stop offset='0%' stopColor='rgba(255,0,0, 1)' />
              <stop offset='100%' stopColor='rgba(255,0,0, 0)' />
            </radialGradient>
          </defs>
          {/* Rects */}
          <rect
            x='13.744%'
            y='1.18473%'
            width='100%'
            height='100%'
            fill='url(#Gradient1)'
            transform='rotate(334.41 50 50)'
          >
            <animate
              attributeName='x'
              dur='40s'
              values='25%;0%;25%'
              repeatCount='indefinite'
            />
            <animate
              attributeName='y'
              dur='42s'
              values='0%;25%;0%'
              repeatCount='indefinite'
            />
            <animateTransform
              attributeName='transform'
              type='rotate'
              from='0 50 50'
              to='360 50 50'
              dur='14s'
              repeatCount='indefinite'
            />
          </rect>
          <rect
            x='-2.17916%'
            y='35.4267%'
            width='100%'
            height='100%'
            fill='url(#Gradient2)'
            transform='rotate(255.072 50 50)'
          >
            <animate
              attributeName='x'
              dur='46s'
              values='-25%;0%;-25%'
              repeatCount='indefinite'
            />
            <animate
              attributeName='y'
              dur='48s'
              values='0%;50%;0%'
              repeatCount='indefinite'
            />
            <animateTransform
              attributeName='transform'
              type='rotate'
              from='0 50 50'
              to='360 50 50'
              dur='24s'
              repeatCount='indefinite'
            />
          </rect>
          <rect
            x='9.00483%'
            y='14.5733%'
            width='100%'
            height='100%'
            fill='url(#Gradient3)'
            transform='rotate(139.903 50 50)'
          >
            <animate
              attributeName='x'
              dur='50s'
              values='0%;25%;0%'
              repeatCount='indefinite'
            />
            <animate
              attributeName='y'
              dur='24s'
              values='0%;25%;0%'
              repeatCount='indefinite'
            />
            <animateTransform
              attributeName='transform'
              type='rotate'
              from='360 50 50'
              to='0 50 50'
              dur='18s'
              repeatCount='indefinite'
            />
          </rect>
        </svg>
      </div>
    </>
  );
}
