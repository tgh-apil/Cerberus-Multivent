# Cerberus-Multivent
A system using standard ventilation circuit parts and localy-manufacturable custom components to allow the use of a single ventilator to support two patients.
The system allows **independent control of tidal volume, FiO2, and PEEP for each patient**. 
The sub-circuit for each patient is pressure isolated and separated by N99 filters from main ventilator. 

# DISCLAIMER
This is an **INVESTIGATIONAL MEDICAL DEVICE** being evaluated for use
in hospital setting during **extreme crisis** leading to ventilator
shortages.

It has **not been approved** by any regulatory body.

Its use is **not endorsed** by any institution or professional body,
including the ones where it was developed and tested.

We have made every effort to make the system as safe as possible and to
provide documentation and educational materials for its use, should it be
necessary, in order to minimize the very significant risks of iatrogenic harm.

Any clinical application requires close monitoring of patients by automated 
systems and living, breathing care providers familiar with the system and its 
hazards.

It is posted here in order to facilitate rapid knowledge sharing and research
on strategies for addressing the global ventilator shortages.

Any of use of this device is done purely at your own risk and liability. The
developers and associated institutions do not accept any liability for its use.

# Publications & Media
1. <a href="https://journals.lww.com/ccejournal/Fulltext/2020/05000/Personalized_Ventilation_to_Multiple_Patients.3.aspx?context=LatestArticles" rel="nofollow" target="_blank">Han JS, Mashari A, Singh D, Dianti J, Goligher E, Long M, Ng W, Wasowicz M, Preiss D, Vesely A, Kacmarek R, Keshavjee S, Brochard L, Fisher JA, Slutsky AS. Personalized Ventilation to Multiple Patients Using a Single Ventilator: Description and Proof of Concept. Critical Care Explorations. 2020 May;2(5):e0118.</a>
2. <a href="https://www.cbc.ca/listen/live-radio/1-193-fresh-air/clip/15775663-how-a-doctor-used-his-mentors-30-year-old-paper-to-make-a-split-ventilator-for-two-people" rel="nofollow" target="_blank">How a doctor used his mentor’s 30-year-old paper to make a split ventilator for two people. Fresh Air with Nana aba Duncan. Toronto: Canadian Broadcasting Corporation; 2020.</a>


# Documentation
Cerberus was originally designed to allow complete assembly using commercial off-the-shelf (COTS) ventilator circuit components. In addition to this original version, we created two custom components to make the system more robust and allow the adjustment of PEEP for each patient. Custom component design files can be found in the repository.

## Bill of Materials & Assembly Instructions:

1. <a href="https://github.com/tgh-apil/Cerberus-Multivent/blob/master/Documentation/Cerberus%20-%20BOM%20and%20Assembly%20Instructions%20-%20Hospital%20COTS%20Components.pdf" rel="nofollow" target="_blank">BOM and Assembly Instructions (COTS version)</a>

2. <a href="https://github.com/tgh-apil/Cerberus-Multivent/blob/master/Documentation/Cerberus%20-%20BOM%20and%20Assembly%20Instructions%20-%20Micromanufactured%20Components.pdf" rel="nofollow" target="_blank">BOM and Assembly Instructions (With customized components)</a>

## Instructions for Use

1. <a href="https://github.com/tgh-apil/Cerberus-Multivent/blob/master/Documentation/Cerberus%20-%20Safety%20Check%20Lists.pdf" rel="nofollow" target="_blank">Safety Check Lists</a> 

2. <a href="https://github.com/tgh-apil/Cerberus-Multivent/blob/master/Documentation/Cerberus%20-%20Quick%20Guide.pdf" rel="nofollow" target="_blank">Quick Guide</a> 

## Mathematical Model & Simulator

A mathematical model of the system along with a simulator have been created for staff training. The simulator includes a solver that suggests settings to achieve specific end points. All software is in beta. Software is for educational and research use only.

1. <a href="https://github.com/tgh-apil/Cerberus-Multivent/tree/master/Simulator" rel="nofollow" target="_blank">Mathematical Model</a>

2. <a href="https://ventilator-simulator.now.sh/" rel="nofollow" target="_blank">Simulator</a>  

Developed by Azad Mashari, Eitan Grinspun, Bai Li, Isaac Waller, Jim Duffin, Devin Singh

# Cerberus-multivent: System Description

![Cerberus Schematic](Diagrams/Cerebrus Circuit - thumbnail.png)

One suggested approach to the severe global shortage of ventilators during the current pandemic has been the splitting of ventilators in order to ventilate multiple patients with one device. The simplest version of this involves simply splitting the inspiratory and expiratory limbs of the circuit into a branch for each patient. Indeed a 3D-printable splitter device, the Prisma VEsper, was granted emergency approval by the FDA last week. This approach however poses significant risks and has a high likelihood of harming one or both patients. This motivated a joint statement by all the major critical
care and related societies (<a href="https://www.apsf.org/news-updates/joint-statement-on-multiple-patients-per-ventilator" rel="nofollow" target="_blank">https://www.apsf.org/news-updates/joint-statement-on-multiple-patients-per-ventilator</a>) warning about the hazards of such an approach.

Cerberus, named for the multi-headed dog of Greek mythology, is a ventilator splitting system that allows largely independent ventilation settings for the co-ventilated patients.

The primary ventilator works to drive multiple bellows assemblies, one for each patient. Each patient has a separate fresh gas flows and pressure-isolated secondary circuit.

On inspiration, the inspiratory pressure generated by the ventilator is Y split with one arm per patient. The gas flow from each of these arms drives a bellows assembly (consisting of reservoir bag inside a canister) uniquely connected to the inspiratory limb of each patient circuit. These also include fresh gas inlets for each patient. There is no sharing of inspiratory gas streams. Each patient receives customized fresh gas mix from an unshared source. During expiration the fresh gas flow refills the reservoir bag for the next breath. The expiratory limbs for each patient include an in-line PEEP valve and converge, along with the drive gas outflow from the bellows assemblies into the expiratory limb of the primary circuit. Check valves and filers are placed to pressure isolate all patient circuits and mitigate risk of infections transmission among patients.

# Development Team &amp; Collaborators

The Cerberus multi-vent is based on a design first presented by Sommer, Fisher et al. **Sommer DD, Fisher JA, Ramcharan V, Marshall S, Vidic DM. Improvised automatic lung ventilation for unanticipated emergencies. Crit Care Med. 1994;22: 705–709.** You can find a personal account from Dr. Joe Fisher of how the project came about <a href="https://www.drjoefisher.com/posts/fresh-air-cbc-may-9-2020-covid-19-and-the-real-back-story" rel="nofollow" target="_blank">here</a> 

**Core Development Team**: Jay Han, Devin Singh, Joseph Fisher, and Azad Mashari, From the Department of Anesthesia and Pain Management, Toronto General Hospital, University Health Network.

**Review & Evaluation**: Jose Dianti, Ewan Goligher, Michael Long, William Ng, Marcin Wasowicz, David Priess, Alex Vesely, Arnaud Mbadjeu, Robert Kacmarek, Shaf Keshavjee, Maha Al-Mandhari, Jesse May, Laurent Brochard, and Arthur Slutsky, from the Departments of Anesthesiology and Pain Management, Critical Care Medicine, Respiratory Care, Surgery and Medicine at University Health Network & St. Michaels Hospital, Toronto; Hospital Italiano de Buenos Aires, Argentina; Brigham and Women’s Hospital, Boston; Surrey Memorial Hospital, Surrey. 

Development was supported by grants from the **University Health Network & Sinai Health Systems Academic Medical Organization COVID-19 Innovation Fund** and the **Toronto General & Western Hospital Foundation** at the University Health Network. This work would not have been possible without the logistical support and hundreds of hours of work from numerous collaborators including:

**UHN Medical Engineering**: Maciej Bauer, Gad Acosta, Dave Gretzinger, Ewaryst Kulikowski, Katina DiBiase

**University of Toronto Engineering / Toronto Tool Library Collaboration**: Kate Kazlovich, James Wallace, Marc Shu-Lutman, Kyle Mayers, Simon Lynch 

**UHN Department of Anesthesia and Pain Management**: Jo Carroll, Samareh Ajami

**UHN/Peter Munk Cardiac Centre,
 Lynn and Arnold Irwin Advanced Perioperative Imaging Lab**: Joshua Qua Hiansen, Vahid Anwari

**Techna Institute**: Jimmy Qiu and Team

**UHN Animal Lab**: Badru Moloo, Alyssa Goldstein, Beth Pielsticker, Sandra Lafrance and Team

**UHN Healthcare Human Factors**: Joe Cafazzo, Neil Sokol, Wayne Ho, Julie Malone

**University of Toronto Computer Science**: U of T CS Department: Eitan Grinspun, Bai Li, Isaac Waller

**UHN Infection Prevention and Control and Medical Device Reporcessing**: AnnMarie Tyson, Kathleen Ross, Alon Vaisman, Kevin Wan

**Toronto General & Western Hospital Foundation**: Shauna Seabrook

**UHN Public Affairs**: Rosa Kim

Thank you!


