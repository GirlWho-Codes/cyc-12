import { Dialog, Button, Divider, IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import React from 'react';
import { SVG } from '.';

const Modals = ({
   open,
   setOpen,
   children,
   loading,
   onClick,
   buttonLabel,
   title,
   onBack,
   hasBack,
}) => {
   const handleClose = () => {
      setOpen(false);
   };

   return (
      <Dialog
         onClose={handleClose}
         open={open}
         sx={{ '& .MuiDialog-paper': { borderRadius: '20px' } }}
      >
         <div className='py-3 sm:py-5 overflow-hidden min-w-[350px] sm:w-[500px] max-w-[500px] w-full'>
            <div
               className={` px-4 sm:px-8 ${
                  hasBack ? 'flex items-center justify-between' : 'text-center'
               } `}
            >
               {hasBack && (
                  <Button
                     className='text-[#454D54] text-[10px] sm:text-xs normal-case'
                     startIcon={<SVG.ArrowBack2 />}
                     variant='text'
                     size='small'
                     onClick={onBack}
                  >
                     Back
                  </Button>
               )}
               <span className='text-xs sm:text-base text-black-80 text-center font-medium '>
                  {title}
               </span>
               <IconButton
                  className={`${
                     !hasBack &&
                     'absolute top-1 right-2.5 sm:top-2.5 sm:right-3.5'
                  } hover:fill-red-700 transition-colors cursor-pointer`}
                  onClick={handleClose}
                  size='small'
               >
                  <SVG.Close />
               </IconButton>
            </div>

            <Divider
               sx={{
                  marginTop: { xs: '12px', sm: '20px' },
                  borderColor: '#E4ECF7',
               }}
            />
            <form className='px-4 sm:px-8 py-4 space-y-6 sm:space-y-10'>
               <div className='space-y-3.5 sm:space-y-5 overflow-y-auto max-h-[60vh]'>
                  {children}
               </div>

               {/* <LoadingButton
                  loading={loading}
                  onClick={onClick}
                  className='normal-case bg-orange text-white w-full text-xs sm:text-sm py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl hover:bg-orange hover:shadow-lg'
               >
                  {buttonLabel}
               </LoadingButton> */}
            </form>
         </div>
      </Dialog>
   );
};

const ModalHeaders = ({ children, close }) => {
  return (
    <div className="modal-header text-center relative pb-4  font-medium">
      {children}

      <button className="p-0 bg-white w-10 h-10 text- absolute top-0 right-10 sm:right-0 md:right-[-15px]" onClick={close}>
        <CloseIcon  />
      </button>
    </div>
  );
};

const ModalBodys = ({ children }) => {
  return <div className="modal-bodys px-[80px]  sm:px-5 md:px-3 lg:px-0 relative right-[54px] sm:left-[0px] ">
    {children}
  </div>;
};

export { Modals, ModalHeaders, ModalBodys };
