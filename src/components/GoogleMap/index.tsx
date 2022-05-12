import { FC, memo, ReactNode, useCallback } from 'react';

import { GoogleMap as GoogleMapLib, useLoadScript } from '@react-google-maps/api';

import { GoogleMapContainer } from '@components/GoogleMap/styles';
import { BindingAction, BindingCallback1 } from '@models/functions';

interface GoogleMapProps {
  apiKey: string;
  scriptId?: string;
  onMapLoad?: BindingCallback1<google.maps.Map>;
  onMapUnmount?: BindingAction;
  mapProps: GoogleMapProps;
  className?: string;
  children?: ReactNode;
}

const GoogleMap: FC<GoogleMapProps> = ({
  scriptId = 'google-map-script',
  apiKey,
  onMapLoad: onMapLoadCallback,
  onMapUnmount: onMapUnmountCallback,
  mapProps,
  className,
  children = '',
}) => {
  const { isLoaded, loadError } = useLoadScript({
    id: scriptId,
    googleMapsApiKey: apiKey,
  });

  const onMapLoad = useCallback(
    (map: google.maps.Map) => {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      onMapLoadCallback?.(map);
    },
    [onMapLoadCallback],
  );

  const onMapUnmount = useCallback(
    () => onMapUnmountCallback?.(),
    [onMapUnmountCallback],
  );

  if (loadError) {
    return <h2>Error loading of the map</h2>;
  }
  if (!isLoaded) {
    return <></>;
  }

  return (
    <GoogleMapLib
      zoom={11}
      onLoad={onMapLoad}
      onUnmount={onMapUnmount}
      mapContainerStyle={GoogleMapContainer}
      mapContainerClassName={className}
      {...mapProps}
    >
      {children}
    </GoogleMapLib>
  );
};

export default memo(GoogleMap);
