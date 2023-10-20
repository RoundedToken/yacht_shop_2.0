import Script from 'next/script';

const Analytics = () => {
    return (
        <Script id="matomo">
            {`var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            (function() {
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.async=true; g.src='${process.env.MATOMO_URL}'; s.parentNode.insertBefore(g,s);
            })();`}
        </Script>
    );
};

export default Analytics;
