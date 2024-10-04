// // "use client";

// // import { ColumnDef } from "@tanstack/react-table";
// // import Image from "next/image";

// // import { Doctors } from "@/constants";
// // import { formatDateTime } from "@/lib/utils";
// // import { Appointment } from "@/types/appwrite.types";

// // import { AppointmentModal } from "../AppointmentModal";
// // import { StatusBadge } from "../StatusBadge";

// // export const columns: ColumnDef<Appointment>[] = [
// //   {
// //     header: "#",
// //     cell: ({ row }) => {
// //       return <p className="text-14-medium ">{row.index + 1}</p>;
// //     },
// //   },
// //   {
// //     accessorKey: "patient",
// //     header: "Patient",
// //     cell: ({ row }) => {
// //       const appointment = row.original;
// //       return <p className="text-14-medium ">{appointment.patient.name}</p>;
// //     },
// //   },
// //   {
// //     accessorKey: "status",
// //     header: "Status",
// //     cell: ({ row }) => {
// //       const appointment = row.original;
// //       return (
// //         <div className="min-w-[115px]">
// //           <StatusBadge status={appointment.status} />
// //         </div>
// //       );
// //     },
// //   },
// //   {
// //     accessorKey: "schedule",
// //     header: "Appointment",
// //     cell: ({ row }) => {
// //       const appointment = row.original;
// //       return (
// //         <p className="text-14-regular min-w-[100px]">
// //           {formatDateTime(appointment.schedule).dateTime}
// //         </p>
// //       );
// //     },
// //   },
// //   {
// //     accessorKey: "primaryPhysician",
// //     header: "Doctor",
// //     cell: ({ row }) => {
// //       const appointment = row.original;

// //       const doctor = Doctors.find(
// //         (doctor) => doctor.name === appointment.primaryPhysician
// //       );

// //       return (
// //         <div className="flex items-center gap-3">
// //           <Image
// //             src={doctor?.image!}
// //             alt="doctor"
// //             width={100}
// //             height={100}
// //             className="size-8"
// //           />
// //           <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
// //         </div>
// //       );
// //     },
// //   },
// //   {
// //     id: "actions",
// //     header: () => <div className="pl-4">Actions</div>,
// //     cell: ({ row }) => {
// //       const appointment = row.original;

// //       return (
// //         <div className="flex gap-1">
// //           <AppointmentModal
// //             patientId={appointment.patient.$id}
// //             userId={appointment.userId}
// //             appointment={appointment}
// //             type="schedule"
// //             title="Schedule Appointment"
// //             description="Please confirm the following details to schedule."
// //           />
// //           <AppointmentModal
// //             patientId={appointment.patient.$id}
// //             userId={appointment.userId}
// //             appointment={appointment}
// //             type="cancel"
// //             title="Cancel Appointment"
// //             description="Are you sure you want to cancel your appointment?"
// //           />
// //         </div>
// //       );
// //     },
// //   },
// // ];
// "use client";

// import { ColumnDef } from "@tanstack/react-table";
// import Image from "next/image";

// import { Doctors } from "@/constants";
// import { formatDateTime } from "@/lib/utils";
// import { Appointment } from "@/types/appwrite.types";

// import { AppointmentModal } from "../AppointmentModal";
// import { StatusBadge } from "../StatusBadge";

// import { PatientModal } from "../PatientModal";
// import React from "react";

// interface ColumnsProps {
//   openModal: (patientId: string) => void;
//   isModalOpen: boolean;
//   selectedPatientId: string | null;
//   closeModal: () => void;
// }

// export const Columns = ({
//   openModal,
//   isModalOpen,
//   selectedPatientId,
//   closeModal,
// }: ColumnsProps): ColumnDef<Appointment>[] => [
//   {
//     header: "#",
//     cell: ({ row }) => {
//       return <p className="text-14-medium ">{row.index + 1}</p>;
//     },
//   },
//   {
//     accessorKey: "patient",
//     header: "Patient",
//     cell: ({ row }) => {
//       const appointment = row.original;

//       return (
//         <div className="text-14-medium cursor-pointer">
//           <div onClick={() => openModal(appointment.patient.$id)}>
//             <p>{appointment.patient.name}</p>
//           </div>
//           {isModalOpen && selectedPatientId === appointment.patient.$id && (
//             <PatientModal
//               patientId={selectedPatientId}
//               closeModal={closeModal}
//             />
//           )}
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => {
//       const appointment = row.original;
//       return (
//         <div className="min-w-[115px]">
//           <StatusBadge status={appointment.status} />
//         </div>
//       );
//     },
//   },
//   {
//     accessorKey: "schedule",
//     header: "Appointment",
//     cell: ({ row }) => {
//       const appointment = row.original;
//       return (
//         <p className="text-14-regular min-w-[100px]">
//           {formatDateTime(appointment.schedule).dateTime}
//         </p>
//       );
//     },
//   },
//   {
//     accessorKey: "primaryPhysician",
//     header: "Doctor",
//     cell: ({ row }) => {
//       const appointment = row.original;

//       const doctor = Doctors.find(
//         (doctor) => doctor.name === appointment.primaryPhysician
//       );

//       return (
//         <div className="flex items-center gap-3">
//           <Image
//             src={doctor?.image!}
//             alt="doctor"
//             width={100}
//             height={100}
//             className="size-8"
//           />
//           <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
//         </div>
//       );
//     },
//   },
//   {
//     id: "actions",
//     header: () => <div className="pl-4">Actions</div>,
//     cell: ({ row }) => {
//       const appointment = row.original;

//       return (
//         <div className="flex gap-1">
//           <AppointmentModal
//             patientId={appointment.patient.$id}
//             userId={appointment.userId}
//             appointment={appointment}
//             type="schedule"
//             title="Schedule Appointment"
//             description="Please confirm the following details to schedule."
//           />
//           <AppointmentModal
//             patientId={appointment.patient.$id}
//             userId={appointment.userId}
//             appointment={appointment}
//             type="cancel"
//             title="Cancel Appointment"
//             description="Are you sure you want to cancel your appointment?"
//           />
//         </div>
//       );
//     },
//   },
// ];

"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import React from "react";

import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";
import { Appointment } from "@/types/appwrite.types";

import { AppointmentModal } from "../AppointmentModal";
import { StatusBadge } from "../StatusBadge";
import { PatientModal } from "../PatientModal";

interface ColumnsProps {
  openModal: (patientId: string) => void;
  isModalOpen: boolean;
  selectedPatientId: string | null;
  closeModal: () => void;
}

export const Columns = ({
  openModal,
  isModalOpen,
  selectedPatientId,
  closeModal,
}: ColumnsProps): ColumnDef<Appointment>[] => [
  {
    header: "#",
    cell: ({ row }) => {
      return <p className="text-14-medium ">{row.index + 1}</p>;
    },
  },
  {
    accessorKey: "patient",
    header: "Patient",
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <div className="text-14-medium cursor-pointer">
          <div
            onClick={() => openModal(appointment.patient.$id)}
            className="inline-block px-3 py-3 text-white rounded-md hover:bg-gray-800 hover:text-gray-300 transition-colors duration-200"
          >
            <p>{appointment.patient.name}</p>
          </div>
          {isModalOpen && selectedPatientId === appointment.patient.$id && (
            <PatientModal
              patientId={selectedPatientId}
              closeModal={closeModal}
            />
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <div className="min-w-[115px]">
          <StatusBadge status={appointment.status} />
        </div>
      );
    },
  },
  {
    accessorKey: "schedule",
    header: "Appointment",
    cell: ({ row }) => {
      const appointment = row.original;
      return (
        <p className="text-14-regular min-w-[100px]">
          {formatDateTime(appointment.schedule).dateTime}
        </p>
      );
    },
  },
  {
    accessorKey: "primaryPhysician",
    header: "Doctor",
    cell: ({ row }) => {
      const appointment = row.original;

      const doctor = Doctors.find(
        (doctor) => doctor.name === appointment.primaryPhysician
      );

      return (
        <div className="flex items-center gap-3">
          <Image
            src={doctor?.image!}
            alt="doctor"
            width={100}
            height={100}
            className="size-8"
          />
          <p className="whitespace-nowrap">Dr. {doctor?.name}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="pl-4">Actions</div>,
    cell: ({ row }) => {
      const appointment = row.original;

      return (
        <div className="flex gap-1">
          <AppointmentModal
            patientId={appointment.patient.$id}
            userId={appointment.userId}
            appointment={appointment}
            type="schedule"
            title="Schedule Appointment"
            description="Please confirm the following details to schedule."
          />
          <AppointmentModal
            patientId={appointment.patient.$id}
            userId={appointment.userId}
            appointment={appointment}
            type="cancel"
            title="Cancel Appointment"
            description="Are you sure you want to cancel your appointment?"
          />
        </div>
      );
    },
  },
];
