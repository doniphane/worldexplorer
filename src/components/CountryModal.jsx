import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

function CountryModal({ country, isOpen, onClose }) {
    if (!country) return null;

    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-50" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto flex items-center justify-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="scale-95 opacity-0"
                        enterTo="scale-100 opacity-100"
                        leave="ease-in duration-150"
                        leaveFrom="scale-100 opacity-100"
                        leaveTo="scale-95 opacity-0"
                    >
                        <Dialog.Panel className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
                            <Dialog.Title className="text-2xl font-bold mb-4">
                                {country.name.common}
                            </Dialog.Title>

                            <img
                                src={country.flags.svg}
                                alt={`Drapeau de ${country.name.common}`}
                                className="w-full h-32 object-contain mb-4"
                            />

                            <p><strong>Nom officiel :</strong> {country.name.official}</p>
                            <p><strong>Code :</strong> {country.cca3}</p>
                            <p><strong>Capitale :</strong> {country.capital?.[0] || "N/A"}</p>
                            <p><strong>Région :</strong> {country.region}</p>
                            <p><strong>Population :</strong> {country.population.toLocaleString()}</p>
                            <p><strong>Domaine :</strong> {country.tld?.[0] || "N/A"}</p>
                            <p><strong>Langues :</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
                            <p><strong>Devise :</strong> {country.currencies ? Object.values(country.currencies)[0]?.name : "N/A"}</p>

                            <button
                                onClick={onClose}
                                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Fermer
                            </button>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
}

export default CountryModal;
