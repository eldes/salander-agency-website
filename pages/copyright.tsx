import { NextPage } from 'next';
import styles from '../components/layout/styles.module.scss';

const CopyrightPage: NextPage = () => {
  return (
    <>
      <p className={styles.Subtitle}>
        Copyright is a legal right, existing globally in many countries, that grants the creator of an original work exclusive rights to determine and decide whether, and under what conditions, this original work may be used by others.
      </p>
      <h2>Which works are protected by copyright law:</h2>

      <ul>
        <li>the texts of literary, artistic or scientific works</li>
        <li>conferences, speeches, sermons and other works of the same nature</li>
        <li>dramatic and dramatic-musical works</li>
        <li>choreographic and pantomime works, whose scenic execution is fixed in writing or in any other way</li>
        <li>musical compositions, whether or not lettered</li>
        <li>audiovisual works, whether or not sonicated, including cinematographic</li>
        <li>photographic works and those produced by any process analogous to photography</li>
        <li>the works of drawing, painting, engraving, sculpture, lithography and kinetic art</li>
        <li>illustrations, geographical charts and other works of the same nature</li>
        <li>projects, sketches and plastic works concerning geography, engineering, topography, architecture, landscaping, set design and science</li>
        <li>the adaptations, translations and other transformations of original works, presented as new intellectual creation</li>
        <li>computer programs, including fonts</li>
        <li>collections or compilations, anthologies, encyclopedias, dictionaries, databases and other works that, by their selection, organization or arrangement of their content, constitute an intellectual creation</li>
      </ul>
      <h2>What is not protected by copyright law:</h2>
      <ul>
        <li>ideas, normative procedures, systems, methods, projects or mathematical concepts as such</li>
        <li>the schemes, plans or rules for carrying out mental acts, games or business</li>
        <li>blank forms to be completed by any type of information, scientific or not, and its instructions</li>
        <li>texts of treaties or conventions, laws, decrees, regulations, judicial decisions and other official acts</li>
        <li>commonly used information such as calendars, schedules, entries or captions</li>
        <li>names and titles alone</li>
        <li>the industrial or commercial exploitation of the ideas contained in the works</li>
      </ul>

      <p>The copy of a work of art made by the author himself is guaranteed the same protection as the original.</p>

      <p>The protection of the intellectual work includes its title, if original and unmistakable with the work of the same genre, previously divulged by another author.</p>
    </>
  );
};

export default CopyrightPage;