import React, { useEffect } from 'react';
import { useSpeechContext } from '@speechly/react-client';

const Speechly = props => {
  const { segment } = useSpeechContext();

  useEffect(
    () => {
      if (segment) {
        segment.entities.forEach(e => {
          switch (e.type) {
            case 'reporttype':
              const reportType = `${e.value.charAt(0)}${e.value
                .slice(1)
                .toLowerCase()}`;
              props.parentCallback1(reportType);
              break;
            case 'reporttime':
              const reportTime = `${e.value.charAt(0)}${e.value
                .slice(1)
                .toLowerCase()}`;
                console.log("reportTime"+reportTime)
              props.parentCallback2(reportTime);
              break;

            default:
              break;
          }
        });
      }
    },
    [segment]
  );

  return (
    <div>
      {segment ? (
        <div className="segment">
          {segment.words.map(w => w.value).join(' ')}
        </div>
      ) : null}
    </div>
  );
};

export default Speechly;
